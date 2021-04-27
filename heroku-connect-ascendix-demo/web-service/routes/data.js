const { Router } = require('express');
const { getContacts } = require('../services/contact');
const router = Router();

/**
 * @swagger
 * /data/hello:
 *   get:
 *     summary: Get Data from SF
 *     tags:
 *       - record
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: SF Data
 */
router.get('/hello', async (request, response) => {
	try {
		console.log(`My custom Log ${process.env.MESSAGE}`)
		response.status(200).json(process.env.MESSAGE);
	} catch (e) {
		response.json(JSON.stringify(e));
	}
});

/**
 * @swagger
 * /data/contacts:
 *   get:
 *     summary: Get Data from SF
 *     tags:
 *       - record
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: SF Data
 */
router.get('/contacts', async (request, response) => {
	try {
		const contacts = await getContacts();
		response.status(200).json(contacts);
	} catch (e) {
		response.json(JSON.stringify(e));
	}
});

module.exports = router;
