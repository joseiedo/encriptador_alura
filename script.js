const result = document.querySelector('.resultado')


function aviso(){
	alert('Jovem, digite algo antes de apertar os botões!')
}

function tiraAcento(){
	texto = document.querySelector("textarea").value.toLowerCase();
	textoAtualizado = texto;
	textoAtualizado = textoAtualizado.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÉÈÊ]','gi'), 'e')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÍÌÎ]','gi'), 'i')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[ÚÙÛ]','gi'), 'u')
  	textoAtualizado = textoAtualizado.replace(new RegExp('[Ç]','gi'), 'c')
  return textoAtualizado;                  
}

function encripta(){
	texto = document.querySelector("textarea").value.toLowerCase();
	if(texto != ''){
		document.getElementById("output-inicial").style.display = "none";
		document.getElementById("result-body").style.display = "block";
		
		tiraAcento();

		textoAtualizado = textoAtualizado.replace(/e/gim, "enter");
		textoAtualizado = textoAtualizado.replace(/i/gim, "imes");
		textoAtualizado = textoAtualizado.replace(/a/gim, "ai");
		textoAtualizado = textoAtualizado.replace(/o/gim, "ober");
		textoAtualizado = textoAtualizado.replace(/u/gim, "ufat");
		result.textContent = textoAtualizado;
	}else{
		aviso();
	}
}

function desencripta(){
	texto = document.querySelector("textarea").value.toLowerCase();
	if(texto != ''){
		document.getElementById("output-inicial").style.display = "none";
		document.getElementById("result-body").style.display = "block";

		tiraAcento();

		textoAtualizado = textoAtualizado.replace(/enter/gim, "e");
		textoAtualizado = textoAtualizado.replace(/imes/gim, "i");
		textoAtualizado = textoAtualizado.replace(/ai/gim, "a");
		textoAtualizado = textoAtualizado.replace(/ober/gim, "o");
		textoAtualizado = textoAtualizado.replace(/ufat/gim, "u");
		result.textContent = textoAtualizado;
	}else{
		aviso();
	}
}

function copiar(){
	navigator.clipboard.writeText(result.textContent)
}



