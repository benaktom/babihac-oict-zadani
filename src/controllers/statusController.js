export const getStatus = (req, res) => {
    res.send('OK'); // [CR] bylo by vhodne poslat json, napr. {status: 'OK'}, aby to bylo konzistentni s ostatnimi routami
}