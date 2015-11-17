# Git

## **Configurações**:
+ **git config --global user.name name**
 - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá executar commits.

+ **git config --global user.email email**
 - configura-se seu email para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá executar commits.
+ **git config -l** 
 - Listagem de todo conteúdo do arquivo <code>~/.gitconfig</code>.

+ **git config core.editor name-editor**
	- configuração para escolher seu editor. por exemplo <code>git config core.editor vim</code>. Irá executar o editor vim.
	para testa-lo, tente executar esse comando <code> git commit </code> e veja qual editor será aberto.

## <b>Iniciando</b>
  + <b>git init</b>
   - Instalação do git na pasta. Sem esse comando, não é possível que, o git monitore suas versões. Todas informações são armazenada em uma pasta oculta de nome `.git`.

  + <b>git init --bare</b>
    - Diferente do `git init` que, cria uma pasta para armazenar essas informações, esse comando cria na raiz. Esse comando é bastante usado em servidores.

## **Verificando status**:
+ **git status**
  - Apresenta arquivos que estiver no índice. Esse comando é bem **importante**, pois, com ele, consegue vê quais arquivos estão preste a ser commitado `Changes to be submitted` e quais ainda vai entrar. 

  > O comando prover um auxilio muito util para que não haja confusões quando for adicionar itens ou commitar.

## **Adicionando no índice**:	
+ **git add nome-do-arquivo**
	- Emcaminha o arquivo para ser commitado. Mudando de `untrack` para `Changes to be submitted`

+ **git add .**
	- Adiciona todos os itens que estão no índice/árvore.

+ **git add -all**	- **git add -A**
	- Adiciona tudo que está no índice, até arquivo deletado.
  
+ **-i, -f, *.extensão**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Removendo arquivos do índice**
+ **git rm -rf nome-do-arquivo --cached**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git rm -rf nome-do-arquivo**	
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Criando commits**
 
 >  Arquivos para entrar num commit tem que está no índice `Changes to be submitted`.

+ **git commit**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git commit -m "mensagem"**
	- Recolhe todos os arquivos modificados e transforma em um pacote. Diversos desses pacotes, que irá formar seu versionamento e facilitará o controle das versões. A propriedade `-m "sua mensagem"` proverá uma breve descrição do  seu pacote, logo deixando tudo mais organizado.

+ <b>git commit -m "mensagem" --amend</b>
	- A propriedade `--amend` prover adicionar algum arquivo esquecido num commit anterior. Um exemplo corriqueiro, ao executar um commit, percebe-se que, ainda há um arquivo que precisa ser adicionando no mesmo commit. A solução é fácil, só adicionar ele como `Changes to be submitted` e commitar novamente com o a propriedade `--amend`. O comentário é um opicional ser igual ou não.

+ <b> git commit -a -m "mensagem"</b>
	- Mas com o esse comando, é possível adicionar diretamente ao índice e impacotar. Os arquivos não precisa está em `Changes to be submitted`. A propriedade `-a` e `-m "sua mensagem"` pode se juntar, ` git commit -am "sua mensagem"`, causando o mesmo efeito.

	> Importante lembrar que, esse comando tem que ser usado com  muito cuidado, pois não irá visualizar os arquivos que está sendo empacotado, diferetente quando adiciona manualmente com o ` git add ` e pode visualizar com o `git status`.

## **Destrouindo commits**
+	**git reset HEAD ~1 --soft**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+	**git reset HEAD ~1 --hard**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+	**git reset HEAD ~1 --soft**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Visualizar commits</b>
+ <b>git log</b>
	- Listagem de todos commits/pacotes em ordem de como foi commitado. Por exemplo, se commitar um commit nesse momento, ele será o primeiro na lista.

+ **git log --stat**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --reflog**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --graph**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log --oneline</b>
	- Listagem de todos os commits reduzido e em uma linha apenas. Nesse listagem, os commits só exibe sua Hash e descrição. A hash, reduzida com apenas os setes números iniciais.

+ **git log --pretty-oneline**
	- Lista todos os commits, aparecendo apenas os nomes do mesmos e o seu ** hash **, só que ao contrário do `git log --online` o ** hash ** não se exibe minificado. Mostra-se, todos os números e letras que ele contém.

+ **git log --abbrev-commit**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log -p**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log -p -3**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Guardar arquivos</b>
+ <b>git stash</b>
	- Guardar tudo que estiver em `Changes to be submitted`. Com a posibilidade de recuperar recuperar os mesmo em quaisquer momento.

	Simplificando, o stash é como se fosse uma gaveta, onde coloca objetos e guarda, quando precisemos retiramos.

	Nesse caso, esses objetos seria nossos arquivos.

+ **git stash list**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash apply</b>
	- Lista de todos os itens que foram guardado. Cada seção, tem uma númeração, ou seja cada vez que você guarda, o git o coloca em locais separados, assim evitando conflitos quando for recupera-lôs.

+ **git stash pop**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash drop**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash save**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Trabalhando com branch</b>
+ <b>git branch</b>
	- Lista todas as branchs existente.

+ **git checkout**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git checkout -b</b>
	- Cria uma nova branch e automaticamente muda para a mesma.

+ **git merge**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.
	
+ **git rebase**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git rebase --continue**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git checkout hash**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git checkout branch-baseada -b branch-nova**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git branch -D</b>
	- Deleta uma branch. Vale salientar que não deve está dentro dela.

+ <b>git checkout --orphan name-branch</b>
	- Cria uma branch sem se basear em nenhuma, ou seja, cria uma branch sem nenhum commit armazenado no seu log.

+ **git branch -m rename**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Sicronizando, atualizando e enviando**
+ **git remote add origin <url>**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git remote -v**
	- Lista de todos os caminhos. Caminho esse que, possibilita o envio e downloads de informações. 

+ **git push origin branch**
	- Envia alterações para o caminho que será definido atráves do comando `git remote add <url>`. Um exemplo é o Github e seus arquivos locais. Executano o comando, enviará todos commits para o servidor, no caso o repositório no github.

+ **git pull**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git merge branch**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Guardando arquivos, logo mais uso você!**
+ **git stash**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash list**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash apply**
	- Sempre ao mais recente...Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash drop stash@{0}**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash pop**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Conflitos**
+ **git merge --abort**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git config --global merge.tool meld**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Visualizando mudanças**

+ **git diff**
	- Mostra tudo que foi modificado. Vale salientar que, para o comando ser valido, o/os arquivo/arquivos devem está em `Changes not staged for commit`.

+ **git diff -w**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git diff arquivo1 arquivo2**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Removendo mudanças**

+ **git checkout nome-do-arquivo**
	- Desfaz mudanças que foram feitas. Vale salientar que, para esse comando ser valido, o arquivo deve está em `Changes not staged for commit`.
