const MissionCommander = require('../app/missionCommander');

describe('Unit test for Mission Commander', () => {
    test('1. Create Mission Commander', () => {
        const myMissionCommander = new MissionCommander('Julieta Delgado')
        expect(myMissionCommander.name).toBe('Julieta Delgado')
    })
})