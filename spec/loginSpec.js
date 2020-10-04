describe('login',()=>{
    describe('when user logs in succesfully',()=>{
        it('should resolve a token',()=>{
            const response={token:'123'};
            const logInValue=new Promise((resolve,reject)=>{
                resolve(response);
            });
            spyOn(Api,'login').and.returnValue(logInValue);
            return expectAsync(login('test','test'))
            .toBeResolvedTo(response.token);
        })
    })
    describe('when the user uses an incorrect e-mail',()=>{
        it('should reject with an error message',()=>{ 
            const response={error:'user not found'};
            const logInValue=new Promise((resolve,reject)=>{
                resolve(response);
            }); 
            spyOn(Api,'login').and.returnValue(logInValue);
            return expectAsync(login('test','test'))
            .toBeRejectedWithError('Oops! Incorrect username or password. Check your details and try again.');

            });
        })
    describe('when password is not passed to login',()=>{
        it('should reject with error message',()=>{
            const response = {error: 'Missing password'};
            const logInValue=new Promise((resolve,reject)=>{
                resolve(response);
            });
            spyOn(Api,'login').and.returnValue(logInValue);
            return expectAsync(login('test','test'))
            .toBeRejectedWithError('Oops! Missing password, make sure to fill in your password and try again.');

            });
        })
    })
