import profile_header from '../views/profile_header.html';
import profile_main from '../views/profile_main.html';

const render = () => {
    $('#header').html(profile_header);
    $('#profile_wrapper').html(profile_main);
}

export default {
    render
}