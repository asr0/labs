# Git

## **Configurações**:
+ **git config --global user.name name**
 - configura-se seu nome para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá executar commits.

+ **git config --global user.email email**
 - configura-se seu email para que o mesmo acompanhe seus commits. Uma vez sem essa configuração, não poderá executar commits.
+ **git config --list** ou **git config -l** 
 - Lista de de configurações do diretório atual.

+ **git config core.editor name-editor**
	- configuração para escolher seu editor. Por exemplo <code>git config core.editor vim</code>. Irá executar o editor vim quando o git precisar de um editor. Para testa-lo, tente executar esse comando `git commit` e veja qual editor será aberto.

## **Iniciando**
  + **git init**
   - Instalação do git na pasta. Sem esse comando, não é possível que, o git monitore suas versões. Todas informações são armazenada em uma pasta oculta de nome `.git`.

  + **git init --bare**
    - Diferente do `git init` que, cria uma pasta para armazenar essas informações, esse comando cria na raiz. Esse comando é bastante usado em servidores.

## **Verificando status**:
+ **git status**
  - Apresenta arquivos que estiver no índice. Esse comando é bem **importante**, pois, com ele, consegue vê quais arquivos estão preste a ser commitado `Changes to be submitted` e quais ainda vai entrar. Ùns dos comandos que irá usar a cada 50 segundos. 

  > O comando prover um auxílio muito útil para que não haja confusões quando for adicionar itens ou commitar.

## **Adicionando no índice**:	
+ **git add nome-do-arquivo**
	- Encaminha o arquivo para ser commitado. Mudando de `untrack` para `Changes to be submitted`

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
	- Te prover detalhar mais seu commit. Primeiramente ele vai levar pra um editor configurado por você, depois é só escrever na primeira linha, qual a mensagem do seu commit, nas demais a descrição do commit, vale salientar que pode quebrar linhas, ou seja escrever em paragráfos.
	-  [Quero configurar meu editor](#).

+ **git commit -m "mensagem"**
	- Recolhe todos os arquivos modificados e transforma em um pacote. Diversos desses pacotes, que irá formar seu versionamento e facilitará o controle das versões. A propriedade `-m "sua mensagem"` proverá uma breve descrição do  seu pacote, logo deixando tudo mais organizado.

+ **git commit -m "mensagem" --amend**
	- A propriedade `--amend` prover adicionar algum arquivo esquecido num commit anterior. Um exemplo corriqueiro, ao executar um commit, percebe-se que, ainda há um arquivo que precisa ser adicionando no mesmo commit. A solução é fácil, só adicionar ele como `Changes to be submitted` e commitar novamente com o a propriedade `--amend`. O comentário é um opcional ser igual ou não.

+ ** git commit -a -m "mensagem"**
	- Mas com o esse comando, é possível adicionar diretamente ao índice e empacotar. Os arquivos não precisa está em `Changes to be submitted`. A propriedade `-a` e `-m "sua mensagem"` pode se juntar, ` git commit -am "sua mensagem"`, causando o mesmo efeito.

	> Importante lembrar que, esse comando tem que ser usado com  muito cuidado, pois não irá visualizar os arquivos que está sendo empacotado, diferente quando adiciona manualmente com o ` git add ` e pode visualizar com o `git status`.

## **Destrouindo commits**
+	**git reset HEAD ~1 --soft**
	- Destroe o commit anterior e exibe todos os arquivos modificado no índice pronto para ser commita-los novamente. A quantidade de commits que é desejada passa depois do **til(~)**. Por exemplo, poderia ser `git reset HEAD~2 --soft`.

+	**git reset HEAD ~1 --hard**
	- Apaga o commit literalmente e não volta pra nenhum índice.

## **Visualizar commits**
+ **git log**
	- Listagem de todos commits/pacotes em ordem de como foi commitado. Por exemplo, se commitar um commit nesse momento, ele será o primeiro na lista.

+ **git log --stat**
	- Lista todos seus commits com um recurso a mais, que é, o que foi feito nele.
	- **Changed (Mudanças)**
	- ** + Insertions (Insersões)**
	- ** - Deletions (Deleções)**.

+ **git log --reflog**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --graph**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git log --oneline**
	- Listagem de todos os commits reduzido e em uma linha apenas. Nesse listagem, os commits só exibe sua Hash e descrição. A hash, reduzida com apenas os setes números iniciais.

+ **git log --pretty-oneline**
	- Lista todos os commits, aparecendo apenas os nomes do mesmos e o seu ** hash **, só que ao contrário do `git log --online` o ** hash ** não se exibe minificado. Mostra-se, todos os números e letras que ele contém.

+ **git log --abbrev-commit**
	- Aprevia a **hash** de todos os commits, mostrando apenas os sete números iniciais.

+ **git log -p**
	- Lista de todos os commits e fazendo um diff, ou seja mostrando o que foi alterado em cada um.

+ **git log -p -3**
	- Atribuindo um `-` mais uma numeração, `-5`, por exemplo, exibe os primeiros cinco commits e o que foi alterado em cada qual .

## **Guardar arquivos**
+ **git stash**
	- Guardar tudo que estiver em `Changes to be submitted`. Com a possibilidade de recuperar recuperar os mesmo em quaisquer momento.

	Simplificando, o stash é como se fosse uma gaveta, onde coloca objetos e guarda, quando precisemos retiramos.

	Nesse caso, esses objetos seria nossos arquivos.

+ **git stash list**
	- Lista de todos os itens que foram guardado. Cada seção, tem uma numeração, ou seja cada vez que você guarda, o git o coloca em locais separados, assim evitando conflitos quando for recupera-lôs.

+ **git stash save "correção bug IE"**
	- Salva com um nome especifico, assim facilita muito quando for trazer de volta para o índice.

+ **git stash apply**
	- Trás novamente os itens para o `Changes to be submitted` e deixa ainda salvo na lista. Se executar `git stash list`, ainda vai vê ele lá.

+ **git stash pop**
	- Trás novamente para o índice e não o deixa salvo na lista. Caso, queira pegar um stash especifico, basta adicionar seu índice `git stash pop stash@{0}`. Por padrão `git stash pop`, ele trás sempre o stash do índice 0.

+ **git stash drop**
	- Apaga o stash da lista e não volta pra nenhuma área do índice. Igual o `git stash pop` se rodar o comando sem especificar qual queira apagar, ele irá deletar sempre o índice 0.


## **Trabalhando com branch**
+ **git branch**
	- Lista todas as branchs existente.

+ **git checkout**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git checkout -b**
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
	- Pra criação de branch baseada em outra, nem sempre é necessário está na branch que queira. Pode criar com o comando acima de qualquer brach, sendo a **branch baseada** a branch que você quer ter um clone e a **branch nova** o nome da branch que deseja criar.

+ **git branch -D**
	- Deleta uma branch. Vale salientar que não deve está dentro dela.

+ **git checkout --orphan name-branch**
	- Cria uma branch sem se basear em nenhuma, ou seja, cria uma branch sem nenhum commit armazenado no seu log.

+ **git branch -m rename**
	- Renomar uma branch. Vale salientar que não pode está na mesma.

## **Sicronizando, atualizando e enviando**
+ **git remote add origin <url>**
	- Adicionar uma direção para seus arquivos. Até mesmo, fazer uma conexão entre o local e o servidor. Um exemplo bem claro é o github, onde passamos por exemplo `git remote add origin git@github.com:andersonweb/labs.git` e estabelecerá uma conexão entre um servidor e um servidor local.
	
	> o caminho a ser passado (`<url>`) não são iguais para todos, no caso do github, você pode encontra-lo no lado esquerdo - **SSH clone URL**.

+ **git remote -v**
	- Lista de todos os caminhos. Caminho esse que, possibilita o envio e downloads de informações. 

+ **git push origin branch**
	- Envia alterações para o caminho que será definido através do comando `git remote add <url>`. Um exemplo é o Github e seus arquivos locais. Executano o comando, enviará todos commits para o servidor, no caso o repositório no github.

+ **git pull**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git merge branch**
	- Trás o que não tem de outra branch para a atual. As vezes, pode gerar alguns conflitos, mas é bem fácil de resolver. Se acontecer conflitos, veja o tópico abaixo.

## **Conflitos**
+ **git merge --abort**
	- Aborta o processo de merge. Ou seja, cancela a atualização.

+ **git config --global merge.tool meld**
	- É um programa para facilitar quando houver conflitos. Com esse comando, você configura qual o **merge tools**, ou seja a ferramenta que queira que lhe ajude quando tiver acontecendo conflitos. Baixe o [meld](http://meldmerge.org/) em sua maquina. E quando houver conflito, basta rodar `meld` no terminal.

## **Visualizando mudanças**

+ **git diff**
	- Mostra tudo que foi modificado. Vale salientar que, para o comando ser valido, o/os arquivo/arquivos devem está em `Changes not staged for commit`.

+ **git diff -w**
	- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua.

+ **git diff HEAD:arquivo1 arquivo2**
	- Compara um arquivo com o outro e mostra suas diferenças.

## **Removendo mudanças**

+ **git checkout nome-do-arquivo**
	- Desfaz mudanças que foram feitas. Vale salientar que, para esse comando ser valido, o arquivo deve está em `Changes not staged for commit`.
