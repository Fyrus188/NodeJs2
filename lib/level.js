const fs = require('fs-extra')

/**
 * Get user ID from db.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getLevelingId = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].id
    }
} 

/**
 * Get user level from db.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getLevelingLevel = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].level
    }
}

/**
 * Get user XP from db.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getLevelingXp = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].xp
    }
}

/**
 * Add user to db.
 * @param {String} userId 
 * @param {Object} _dir 
 */
const addLevelingId = (userId, _dir) => {
    const obj = { id: userId, xp: 0, level: 1, role: 'METAL' }
    _dir.push(obj)
    fs.writeFileSync('./lib/data/function/user/level.json', JSON.stringify(_dir))
}

/**
 * Add user level to db.
 * @param {String} userId 
 * @param {Number} amount 
 * @param {Object} _dir 
 */
const addLevelingLevel = (userId, amount, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].level += amount
        fs.writeFileSync('./lib/data/function/user/level.json', JSON.stringify(_dir))
    }
}

/**
 * Add user XP to db.
 * @param {String} userId 
 * @param {Number} amount 
 * @param {Object} _dir 
 */
const addLevelingXp = (userId, amount, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].xp += amount
        fs.writeFileSync('./lib/data/function/user/level.json', JSON.stringify(_dir))
    }
}

/**
 * Add user role to db.
 * @param {String} userId 
 * @param {String} role 
 * @param {Object} _dir 
 */
const addLevelingRole = (userId, role, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _dir[position].role = role
        fs.writeFileSync('./lib/data/function/user/level.json', JSON.stringify(_dir))
    }
}

/**
 * Get user role from db.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {String}
 */
const getLevelingRole = (userId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        return _dir[position].role
    }
}

/**
 * Push a new data.
 * @param {String} userId 
 * @param {String} role 
 * @param {Number} xp 
 * @param {Number} level 
 * @param {Object} _dir 
 */
const pushLevelingRole = (userId, role, xp, level, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        const obj = { id: userId, xp: xp, level: level, role: role }
        _dir.push(obj)
        fs.writeFileSync('./lib/data/function/user/level.json', JSON.stringify(obj))
    }
}


module.exports = {
    getLevelingId,
    getLevelingLevel,
    getLevelingXp,
    addLevelingId,
    addLevelingLevel,
    addLevelingXp,
    addLevelingRole,
    getLevelingRole,
    pushLevelingRole
}