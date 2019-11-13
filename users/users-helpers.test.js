const {validateUsers} = require("./users-helpers")

// sent an empty object, we saw the results fail
//sent and object with a username less than 2 characters, failed
//sent object with valid username, no password

describe('users helpers', ()=> {
    describe('validateUsers()', ()=> {
        it('should fail when missing username and password',() =>{
            // Arrange : setup the world for test
            const invalidUser = {}
            const expected = false

            //Act: execute the system under test (SUT) => validateUser
            const actual = validateUsers(invalidUser)

            //Assert: we check the result
            expect(actual.isSuccessful).toBe(expected) //matchers
        })

        test('should fail if missing password', ()=> {
            const result = validateUsers({username: 'somebody'})
            // expect(validateUsers({username: 'somebody'}).isSuccessful).toBe(false)
            expect(result.isSuccessful).toBe(false)
            expect(result.errors).toHaveLength(1)
            // expect(result.errors[0]).toMath(/include a username/i)
        })
        it('should succeed valid user', ()=> {
            const result = validateUsers({username: 'somebody', password: "valid password"})
            // expect(validateUsers({username: 'somebody'}).isSuccessful).toBe(false)
            expect(result.isSuccessful).toBe(true)
            expect(result.errors).toHaveLength(0)
        })

        it.todo('should fail if username is an object')
        it.todo('should fail if username is an array')
    })
})



