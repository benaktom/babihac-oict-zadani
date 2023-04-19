import axios from "axios";

export const getStateAndValidity = async (req, res) => {
    const cardNumber = req.params.cardNumber;
    try {
        const promises = [
            axios.get(`https://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/validity`),
            axios.get(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/state`)
        ]
        const [validity, state] = await Promise.all(promises);

        const endDate = new Date(validity?.data?.validity_end);
        //format date to DD.MM.YYYY without spaces
        const endDateFormatted = endDate.toLocaleDateString('cs-CZ', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\s/g, '');
        const stateDescription = state?.data?.state_description;

        if(!endDateFormatted || !stateDescription) throw new Error('Invalid data');
        
        res.send({endDate: endDateFormatted, state: stateDescription})
    } catch (error) {
        console.log(error.message);
    }
}