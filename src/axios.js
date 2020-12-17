// import the library version of axios
import axios from "axios";
// create a version of axios with useful defaults
export default axios.create({
	baseURL: "http://ec2-35-178-213-148.eu-west-2.compute.amazonaws.com/api/",
	headers: {
		// make sure we get JSON back
		Accept: "application/json",
		// use your own key
		Authorization: "",
	},
});
