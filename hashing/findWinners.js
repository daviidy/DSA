var findWinners = function(matches) {
    let answer = []
    let records = new Map()
    for(let i = 0; i < matches.length; i++){
      if(records.get(matches[i][0])) {
        let newRecords = records.get(matches[i][0])
        newRecords[0] += 1
        records.set(matches[i][0], newRecords)
      } else {
        records.set(matches[i][0], [1, 0])
      }

      if(records.get(matches[i][1])) {
        let newRecords = records.get(matches[i][1])
        newRecords[1] += 1
        records.set(matches[i][1], newRecords)
      } else {
        records.set(matches[i][1], [0, 1])
      }
        
    }
    answer[0] = []
    answer[1] = []
    for (const [key, val] of records) {
        if (val[1] === 0) {
            answer[0].push(key);
        }
        if (val[1] === 1) {
            answer[1].push(key)
        }
    }
    answer[0].sort((a, b) => a - b)
    answer[1].sort((a, b) => a - b)
    return answer

};