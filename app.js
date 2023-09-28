// SECTION arrays

const heroes = [
    {
        name: 'Marc',
        type: 'ninja',
        damage: 5,
        health: 68,
        maxHealth: 68,
        gold: 20
    },
    {
        name: 'Rhys',
        type: 'wizard',
        damage: 10,
        health: 44,
        maxHealth: 44,
        gold: 20
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}



// SECTION functions


function attackBoss() {
    const bossesDefeated = document.getElementById('slainBosses')
    const maxHeroDamage = heroes[0].damage + heroes[1].damage
    heroes.forEach(hero => hero.damage == maxHeroDamage)
    boss.health -= maxHeroDamage
    console.log(boss.health)
    drawBoss()
    if (boss.health <= 0) {
        boss.health = 0
        bossesDefeated.innerText++
        levelUpBoss()
        drawBoss()
    }
}


function attackHeroes() {
    heroes.forEach(hero => {
        hero.health -= boss.damage
        if (hero.health < 0) {
            hero.health = 0
        }
    })

    drawHeroHealth()
    // console.log('dang, got hit', heroes[0].health)
}


function drawHeroHealth() {

    heroes.forEach(hero => {
        const heroHealthElement = document.getElementById(hero.name)
        heroHealthElement.innerText = hero.health

    })
}

function drawBoss() {
    const bossLevelElem = document.getElementById('bossLevel')
    const bossHealthElem = document.getElementById('orgeBoi')
    bossHealthElem.innerText = boss.health
    bossLevelElem.innerText = boss.level
}

function levelUpBoss() {

    boss.health += 100
    // boss.maxHealth += 50
    boss.damage += 5
    boss.level += 1


}

function addGold(heroName) {
    heroes.find(hero => hero.name == heroName)
    console.log(hero.name)
    if (hero.gold >= 10) {
        hero.health = hero.maxHealth
        drawHeroHealth()
    }
    // console.log('we working', hero.maxHealth)
    drawGold()
}

function drawGold() {
    const rhysGoldElem = document.getElementById('rhysGold')
    const marcGoldElem = document.getElementById('marcGold')
    const rhysGold = heroes[1].gold
    const marcGold = heroes[0.].gold

    rhysGoldElem.innerText = rhysGold
    marcGoldElem.innerText = marcGold
}





// !SECTION



setInterval(attackHeroes, 5000)