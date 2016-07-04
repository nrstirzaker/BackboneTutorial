/**
 * Created by nstirzak on 10/08/2015.
 */

    module.exports=function(){
        var faker = require('faker');
        var _ = require('lodash');
        return {
            user: _.times(10,function( n ){
                return {
                    id:n,
                    name:faker.name.findName(),
                    email:faker.internet.email()
                }
            })
        }
    }



