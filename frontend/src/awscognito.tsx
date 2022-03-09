import {Auth} from "aws-amplify";

export async function signOut()
    {
        await Auth.signOut();
        window.location.reload();
    }