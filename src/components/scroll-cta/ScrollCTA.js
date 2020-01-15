import scrollToComponent from 'react-scroll-to-component';

// without options
scrollToComponent(this.refs.name);

//with options
scrollToComponent(this.refs.name, {
    offset: 1000,
    align: 'top',
    duration: 1500
});
