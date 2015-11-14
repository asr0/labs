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

## **Iniciando**
  + **git init**
   - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá

  + **git init --bare**
    - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderás

## **Verificando status**:
+ **git status**
  - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderás

## **Adicionando no índice**:	
+ **git add nome-do-arquivo**
	- Emcaminha o arquivo para ser commitado.
+ **git add .**
	- Adiciona todos os itens que estão no índice/árvore.

+ **git add -all**	- **git add -A**
	- Adiciona tudo que está no índice, até arquivo deletado.
  
## **Removendo arquivos do índice**
+ **git rm -rf nome-do-arquivo --cached**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git rm -rf nome-do-arquivo**	
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Adicionando arquivo no índice/árvore**
+ **git add name-do-arquivo**
	- Adiciona ao índice. O arquivo sai de <code>Changes not staged for commit</code> ou seja, as alterações não estão prontas pra commitar e passa pra <code>Changes to be submitted</code> ou seja, está preste a ser commitadas.

+ **git add .**
	- Adiciona tudo que está no índice. Em execessão.

+ **-i, -f, *.extensão**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.
	
## **Criando commits**
+ **git commit**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git commit -m "mensagem"**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git commit -m "mensagem" --amend**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ ** git commit -a -m "mensagem"**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

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

## **Visualizar commits**
+ **git log**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --stat**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --reflog**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --graph**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --oneline**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --pretty-online**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --abbrev-commit**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log -p**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log -p -3**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Guardar arquivos**
+ **git stash**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash list**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash apply**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash pop**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash drop**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git stash save**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Trabalhando com branch**
+ **git branch**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git checkout**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git checkout -b**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

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

+ **git branch -D**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git checkout --orphan name-branch**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git branch -m rename**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Sicronizando, atualizando e enviando**
+ **git remote add origin <url>**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git remote -v**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git push origin branch**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

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
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git diff -w**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git diff arquivo1 arquivo2**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

## **Removendo mudanças**

+ **git checkout nome-do-arquivo**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.
