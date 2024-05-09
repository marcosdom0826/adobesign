import axios from "axios"
export const getAgreementFormData = async (agreement_id: string) => {
    const url = process.env.BASE_URL + "/agreements/" + agreement_id + "/formData"
    const response = await axios.get(url, {
        headers: {
            Authorization: `Bearer ${process.env.TOKEN}`,
            "Accept": "application/json"
        }
    })
    return response.data
}