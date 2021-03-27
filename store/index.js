export const state = () => ({
  _isMobile: false,
  _screenView: {},
  _services: [
    {
      title: 'Desarrollo web',
      description: '<p>Diseñamos tu sitio web personalizado y ajustado a las necesidades de tu negocio, para ser único y distinguido entre tus clientes, o simplemente podes optar por alguno de nuestros modelos desarrollados previamente.</p><p>Te presentamos las mejores soluciones para diseñar tu primera Web Corporativa.</p><p>Desarrollamos sitios web tipo One Page, Landing Page, Blogs y Noticias, Sistemas de Gestión Pesonalizados, Aplicaciones web para administrar todo tipo de empresas y organizaciones.</p>',
      icon: '/icons/desarrollo-web.svg',
      image: '/images/recursos/dev-web.jpg'
    },
    {
      title: 'Diseño Responsive',
      description: ' <p>Verse bien en todos lados te brinda una posición de prestigio y seguridad. Por eso adaptamos tu sitio web para reflejarse de la mejor manera en todos los dispositivos.</p><p>Mostrá presencia y calidad a tus clientes o usuarios con tu sistema web totalmente adaptable a cualquier tipo de dispositivo, ya sea una notebook, tablet o smartphone.</p>',
      icon: '/icons/responsive.svg',
      image: '/images/recursos/responsive.jpg'
    },
    {
      title: 'Diseño UI & UX',
      description: '<p>Nos encargamos de diseñar tu insignia y logotipos para que puedas identificarte del resto ante tus clientes.</p><p>Muestra identidad propia, resalta y distingue tu organización, un sin fin de personas esperan poder encontrarte y distinguir del resto tu marca.</p>',
      icon: '/icons/ui-design.svg',
      image: '/images/recursos/ui-design.jpg'
    },
    {
      title: 'Redes',
      description: '<p>Las redes sociales en la actualidad juegan un papel muy fuerte en el mundo de los negocios. Son cada vez mas las empresas y organizaciones que apuestan a invertir sus recursos en grandes campañas de marketing dento de las redes sociales mas importantes del mundo.</p>',
      icon: '/icons/redes.svg',
      image: '/images/recursos/redes.jpg'
    }
  ],
  _tecnology: [
    {
      name: 'Node js',
      icon: '/icons/nodejs.svg'
    },
    {
      name: 'Angular',
      icon: '/icons/angular.svg'
    },
    {
      name: 'React',
      icon: '/icons/react.svg'
    },
    {
      name: 'Vue',
      icon: '/icons/vue.svg'
    },
    {
      name: 'Django',
      icon: '/icons/django.svg'
    },
    {
      name: 'Laravel',
      icon: '/icons/laravel.svg'
    },
    {
      name: 'Mongo DB',
      icon: '/icons/mongodb.svg'
    },
    {
      name: 'MySQL',
      icon: '/icons/mysql.svg'
    },
    {
      name: 'Docker',
      icon: '/icons/docker.svg'
    },
    {
      name: 'Javascript',
      icon: '/icons/javascript.svg'
    },
    {
      name: 'SASS',
      icon: '/icons/sass.svg'
    },
    {
      name: 'HTML 5',
      icon: '/icons/html5.svg'
    },
    {
      name: 'CSS',
      icon: '/icons/css.svg'
    },
    {
      name: 'Bootstrap',
      icon: '/icons/bootstrap.svg'
    },
    {
      name: 'Vuetify',
      icon: '/icons/vuetify.svg'
    }
  ],
  _templates: [
    {
      name: 'Daraz',
      img: '/images/templates/temp01.png',
      link: '/templates/daraz/'
    },
    {
      name: 'Woodo',
      img: '/images/templates/temp02.png',
      link: '/templates/woodo/'
    },
    {
      name: 'Wise',
      img: '/images/templates/temp03.png',
      link: '/templates/wise/'
    },
    {
      name: 'Sislaf',
      img: '/images/templates/temp04.png',
      link: '/templates/sislaf/'
    },
    {
      name: 'Pullo',
      img: '/images/templates/temp05.png',
      link: '/templates/pullo/'
    }
  ]
})
export const mutations = {
  getScreen (state, screen) {
    state._screenView = screen
    if (screen.width > 768) {
      state._isMobile = false
    } else {
      state._isMobile = true
    }
  }
}

export const actions = {
}
