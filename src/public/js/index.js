import '@babel/polyfill';
{
    class AlertBox {

        textContent (text = '默认无链接') {

            let p = document.createElement('p');
            p.textContent = text;
            let body = document.getElementsByTagName('body')[0];
            console.log(body)
            // body.innerHTML = p;
            body.appendChild(p)
        }
    }
    const alertBox = new AlertBox();
    alertBox.textContent()
}

{
    console.log(a)
    console.log(b)
    console.log(c)
    const a = 1;
    let b;
    var c;
}