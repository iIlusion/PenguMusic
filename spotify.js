import config from "./config.json";

// Build token request URL with our gateway
//https://spotify-refresh-token-generator.netlify.app/

export async function getToken() {
    if (DataStore.get("spotify_access_token")) {
        // Have access_token
        if (DataStore.get("listeningStatus_expires_in")) {
            // Have expires_in
            let tokenTime = DataStore.get("listeningStatus_expires_in")
            if ((tokenTime + 1000 * 60 * 1) < Date.now()) {
                // expires_in expired after 1 hour
            } else {
                // return access_token if exists and not expired
                return DataStore.get("spotify_access_token")
            }
        }
    }

    const basic = window.btoa(
        `${config.SPOTIFY.client_id}:${config.SPOTIFY.client_secret}`
    );

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            Authorization: `Basic ${basic}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: config.SPOTIFY.refreshToken,
        }),
    });

    const data = await response.json();

    DataStore.set("listeningStatus_expires_in", new Date().getTime());
    DataStore.set("spotify_access_token", data.access_token);

    return data.access_token;
}

export async function nowPlayingSpot() {
    const token = await getToken();
    if (!token && config.debug) console.log("Token Undefined(?) "+ token)

    const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (response.stauts == 204) return console.log("token is correct, but spotify doesn't returned any response, try to restart your player")

    const data = await response.json();

    if (data.is_playing) {
        return {
            name: data.item.name,
            artist: data.item.artists[0].name,
        };
    } else return false;
}
