import db from "#db/client";

export async function createPlaylists_tracks(playlist_id, trackId){
const sql = `
INSERT INTO playlists_tracks
(playlist_id, trackId)
VALUES
($1,  $2)
RETURNING *
`;
const {
    rows: [playlist_tracks],
}  = await db.query(sql, [playlist_id, trackId]);
return playlist_tracks;
}