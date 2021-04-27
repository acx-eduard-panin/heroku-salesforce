const pg = require('pg');

module.exports = {
	getContacts() {
		return new Promise((resolve, reject) => {
			const pool = new pg.Pool({
				user: process.env.PG_USER,
				host: process.env.PG_HOST,
				database: process.env.PG_DATABASE,
				password: process.env.PG_PASSWORD,
				port: process.env.PG_PORT,
				ssl: { rejectUnauthorized: false }
			})
			pool.query('SELECT * FROM salesforce.contact ORDER BY id ASC', function (err, result) {
				if (err) {
					reject(err);
					return;
				}
				resolve(result.rows);
				pool.end;
			});
		})
	},
}
