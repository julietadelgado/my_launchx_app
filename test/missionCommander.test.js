const MissionCommander = require('../app/missionCommander');

describe('Unit test for Mission Commander', () => {
    test('1. Create Mission Commander (failed)', () => {
        const myMissionCommander = new MissionCommander('Julieta Delgado')
        expect(myMissionCommander.name).toBe('Julieta Delgado Meza')
    })
    test('2. Create Mission Commander (passed)', () => {
        const myMissionCommander = new MissionCommander('Julieta Delgado')
        expect(myMissionCommander.name).toBe('Julieta Delgado')
    })
})