export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
export const baseUrlDeleteTrack = (id, playlist) => { return `https://us-central1-labenu-apis.cloudfunctions.net/playlists/${playlist}/tracks/${id}`}


export const axiosConfig = {
    headers: {
        Authorization: "Isabelle-Travasso-TurmaCruz"
    }
}