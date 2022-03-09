import {Auth} from "aws-amplify";

export async function useSignOut()
    {
        await Auth.signOut();
        window.location.reload();

    }