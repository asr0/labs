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
