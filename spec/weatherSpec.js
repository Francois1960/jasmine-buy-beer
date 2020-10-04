describe('getWeatherFor',()=>{
    describe('when passed "Sydney"',()=>{
        it('should return 25',()=>{
            return getWeatherFor('Sydney')
                .then((temp)=>{
                    expect(temp).toBe(25);
                })
            })
        })
    describe('when passed for"Melbourne"',()=>{
        it('should resolve 15',()=>{
        return expectAsync(getWeatherFor('Melbourne')).toBeResolved(15);
                })
            })

    describe('when passed for any other city',()=>{
        it('should reject with an  error',()=>{
        return expectAsync(getWeatherFor('Perth'))
            .toBeRejectedWith('City Perth does not exist in our database');
            })
        })
    
})
