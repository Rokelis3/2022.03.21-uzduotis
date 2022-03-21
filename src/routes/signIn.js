import {serialize} from 'cookie';
import { login } from '../services/firebase';
import Session from '../services/session';
import User from '../services/user';

/** @type {import('../../.svelte-kit/types/src/routes/signin').RequestHandler} */
export async function post({request}) {
    const formData = Object.fromEntries((await request.formData()).entries());
    return await login(formData.username, formData.password).then(user => {
    const id = Session.create(user);
    console.log(id, user);
    return {
            status: 303,//See other
            headers: {
              'Set-Cookie': serialize('session-id', id, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60,
              }),
              location: `/`
            }
        };
    }).catch((error) => {console.log(error)});


    // if(User.verify(formData.username, formData.password)) {
    //   const id = Session.create(User.get(formData.username));
    //   return {
    //       status: 303,//See other
    //       headers: {
    //         'Set-Cookie': serialize('session-id', id, {
    //           path: '/',
    //           httpOnly: true,
    //           sameSite: 'strict',
    //           maxAge: 60 * 60,
    //         }),
    //         location: `/`
    //       }
    //   };
    // } else {
    //   return {
    //     status: 401,
    //     body: 'Incorrect username or password'
    //   };
    // }
}