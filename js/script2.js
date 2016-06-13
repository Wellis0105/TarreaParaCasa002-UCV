var totalTiempo=10;
    var url="../web/index.html";
    function updateReloj()
    {
        document.getElementById('CuentaAtras').innerHTML = "Redireccionando en "+totalTiempo+" segundos";

        if(totalTiempo==0)
        {
            window.location=url;
        }else{

            totalTiempo-=1;

            setInterval("updateReloj()",1000);
        }
    }


