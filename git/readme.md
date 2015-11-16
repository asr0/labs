# Git

## <b>Configurações</b>:
+ <b>git config --global user.name name</b>
 - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá executar commits.

+ <b>git config --global user.email email</b>
 - configura-se seu email para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá executar commits.
+ <b>git config -l</b> 
 - Listagem de todo conteúdo do arquivo <code>~/.gitconfig</code>.

+ <b>git config core.editor name-editor</b>
	- configuração para escolher seu editor. por exemplo <code>git config core.editor vim</code>. Irá executar o editor vim.
	para testa-lo, tente executar esse comando <code> git commit </code> e veja qual editor será aberto.

## <b>Iniciando</b>
  + <b>git init</b>
   - Instalação do git na pasta. Sem esse comando, não é possível que, o git monitore suas versões. Todas informações são armazenada em uma pasta oculta de nome `.git`.

  + <b>git init --bare</b>
    - Diferente do `git init` que, cria uma pasta para armazenar essas informações, esse comando cria na raiz. Esse comando é bastante usado em servidores.

## <b>Verificando status</b>:
+ <b>git status</b>
  - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderás

## <b>Adicionando no índice</b>:	
+ <b>git add nome-do-arquivo</b>
	- Emcaminha o arquivo para ser commitado.
+ <b>git add .</b>
	- Adiciona todos os itens que estão no índice/árvore.

+ <b>git add -all</b>	- <b>git add -A</b>
	- Adiciona tudo que está no índice, até arquivo deletado.
  
## <b>Removendo arquivos do índice</b>
+ <b>git rm -rf nome-do-arquivo --cached</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git rm -rf nome-do-arquivo</b>	
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Adicionando arquivo no índice/árvore</b>
+ <b>git add name-do-arquivo</b>
	- Adiciona ao índice. O arquivo sai de <code>Changes not staged for commit</code> ou seja, as alterações não estão prontas pra commitar e passa pra <code>Changes to be submitted</code> ou seja, está preste a ser commitadas.

+ <b>git add .</b>
	- Adiciona tudo que está no índice. Em execessão.

+ <b>-i, -f, *.extensão</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.
	
## <b>Criando commits</b>
+ <b>git commit</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git commit -m "mensagem"</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git commit -m "mensagem" --amend</b>
	- Recolhe todos os arquivos modificados e transforma em um pacote. Diversos desses pacotes, que irá formar seu versionamento e facilitará o controle das versões. A propriedade `-m "sua mensagem"` proverá uma breve descrição do  seu pacote, logo deixando tudo mais organizado.

+ <b> git commit -a -m "mensagem"</b>
	- Um pré requisito para poder commitar é, todo índice esteja em `Changes to be submitted`. Mas com o esse comando, é possível adicionar diretamente ao índice e impacotar. Os arquivos não precisa está em `Changes to be submitted`. A propriedade `-a` e `-m "sua mensagem"` pode se juntar, ` git commit -am "sua mensagem"`, causando o mesmo efeito.

	> Importante lembrar que, esse comando tem que ser usado com  muito cuidado, pois não irá visualizar os arquivos que está sendo empacotado, diferetente quando adiciona manualmente com o ` git add ` e pode visualizar com o `git status`.

## <b>Destrouindo commits</b>
+	<b>git reset HEAD ~1 --soft</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+	<b>git reset HEAD ~1 --hard</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+	<b>git reset HEAD ~1 --soft</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Visualizar commits</b>
+ <b>git log</b>
	- Listagem de todos commits/pacotes em ordem de como foi commitado. Por exemplo, se commitar um commit nesse momento, ele será o primeiro na lista.

+ <b>git log --stat</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log --reflog</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log --graph</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log --oneline</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log --pretty-online</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log --abbrev-commit</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log -p</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git log -p -3</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Guardar arquivos</b>
+ <b>git stash</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash list</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash apply</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash pop</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash drop</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash save</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Trabalhando com branch</b>
+ <b>git branch</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git checkout</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git checkout -b</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git merge</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.
	
+ <b>git rebase</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git rebase --continue</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git checkout hash</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git checkout branch-baseada -b branch-nova</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git branch -D</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git checkout --orphan name-branch</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git branch -m rename</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Sicronizando, atualizando e enviando</b>
+ <b>git remote add origin <url></b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git remote -v</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git push origin branch</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git pull</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git merge branch</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Guardando arquivos, logo mais uso você!</b>
+ <b>git stash</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash list</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash apply</b>
	- Sempre ao mais recente...Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash drop stash@{0}</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git stash pop</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Conflitos</b>
+ <b>git merge --abort</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git config --global merge.tool meld</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Visualizando mudanças</b>

+ <b>git diff</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git diff -w</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b>git diff arquivo1 arquivo2</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## <b>Removendo mudanças</b>

+ <b>git checkout nome-do-arquivo</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.
