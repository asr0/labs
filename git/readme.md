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
   - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá

  + <b>git init --bare</b>
    - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderás

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
	Adiciona ao índice. O arquivo sai de <code>Changes not staged for commit</code> ou seja, as alterações não estão prontas pra commitar e passa pra <code>Changes to be submitted</code> ou seja, está preste a ser commitadas.

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
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ <b> git commit -a -m "mensagem"</b>
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

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
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

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

+ <b>git branch -D</b>
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
