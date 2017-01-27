sequelize model:create --name=Author --attributes name:string,bio:text --underscored
sequelize model:create --name=Book --attributes name:string,isbn:integer,publication_date:date,description:text,author_id:integer --underscore
sequelize db:migrate

