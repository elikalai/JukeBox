import db from "#db/clients";

export async function createTrack(name, duration_ms){
const sql = `
INSERT INTO tracks
(name, duration_ms)
VALUES
($1, $2)
RETURNING *
`;
const {
    rows: tracks
} = await db.query(sql, [name, duration_ms]);
return tracks;
}

export async function getTracks(){
    const sql = `
    SELECT * 
    FROM tracks
    `;
    const {
        rows: tracks
    } = await db.query(sql, [tracks]);
    return tracks;
}

export async function getTracksByPlaylistId(id){
    const sql = `
    SELECT DISTINCT tracks.*
    FROM 
    playlist
    JOIN playlist_tracks ON playlist_tracks.tracks_id = tracks.id
    JOIN playlists ON playlists.id = playlist_tracks.playlist_id
    WHERE playlist.id = $1
    `;
    const {
        rows: tracks
    } = await db.query(sql, [id]);
    return tracks;
}
export async function getTrackById(id){
const sql = `
SELECT * 
FROM tracks
WHERE id = $1
`;
const {
    rows: [track]
}= await db.query(sql, [id]);
return track;
}
