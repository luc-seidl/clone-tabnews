import Script from "next/script";

function Home() {
  return (
    <>
      <Script
        id="clarity-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u87jj1jqy2");
          `,
        }}
      />

      <h1>Olá! bom dia. Tudo bem?</h1>
    </>
  );
}

export default Home;

// nvm alias default
// nvmrc requisitos
// npm install next.js@13.1.6
// npm install react@18.2.0
// npm install react-dom@18.2.0

// git status pra checar o status dos arquivos (aperta Q pra sair do (end))
// git add <file> pra adicionar o arquivo pro stage (usar o -A pra adicionar tudo que mudou)
// git commit pra gerar o commit e preparar pra subir
// -m "<mensagem>"
// --amend "emenda" o ultimo commit
// git branch pra checar a branch
// git push pra passar ao repositório de origem
// adicionando -f ele força o push
// git pull pra puxar arquivos do git

// git log pra checar os logs de cada commit (add --oneline pra ser mais simples)
