import db from "../db.js";

(async () => {
    try {
        const result = await db.raw('SELECT NOW()');
        console.log(result.rows[0]);
    } catch (error) {
        console.error('Error executing query:', error);
    }
})();
