import trip from '../img/viagem.jpg'
import login from '../img/login.jpg'
import mercurio from '../img/mercurio.jpg'
import netuno from '../img/netuno.jpg'
import plutao from '../img/plutao.jpg'
import urano from '../img/urano.webp'

export const images = [
    {
        image: trip,
        title: 'Visualizar viagens',
        width: '40%',
    },
    {
        image: login,
        title: 'Login',
        width: '40%',
    }
]

export const imagePlanet = (planet) => {
    switch (planet) {
        case 'Jupiter':
            return (
                "https://s2.glbimg.com/34AekqqbXdAFCWAuG0g34I6d0Nw=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/w/tNqMxeRvWvSvLbHuChkA/jupiter01.jpg"
            )
        case 'Plutão':
            return (
                plutao
            )
        case 'Mercúrio':
            return (
                mercurio
            )
        case 'Vênus':
            return (
                "https://www.zmescience.com/mrf4u/statics/i/ps/cdn.zmescience.com/wp-content/uploads/2016/08/600px-Venus_in_Real_Color_28Mosaic29.jpg?width=1200&enable=upscale"
            )
        case 'Marte':
            return (
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"
            )
        case 'Urano':
            return (
                urano
            )
        case 'Saturno':
            return (
                "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2020/10/16/saiba-como-o-ciclo-de-saturno-influencia-na-perspectiva-profissional-16094.jpg"
            )
        case 'Netuno':
            return (
                netuno
            )
    }
}