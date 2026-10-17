function customRender(reactElement, container) {

    /*
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   domElement.setAttribute('href',reactElement.props.href)
   domElement.setAttribute('target',reactElement.props.target)
   
   container.appendChild(domElement)*/

    //second way for in loop 

    const documentElement = document.createElement(reactElement.type)
    documentElement.innerHTML = reactElement.children
    for (const props in reactElement.props) {
        if (props == 'children') continue;
        documentElement.setAttribute(props, reactElement.props[props])
    }
    container.appendChild(documentElement)

}


const reactElement = {

    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google link'


}

const reactdomroot = document.querySelector('#root')

customRender(reactElement, reactdomroot)