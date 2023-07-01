export const daysInWeek = (startWeekDay, endWeekDay) => {
    const result = [];
    const day = startWeekDay.clone();
    while (!day.isAfter(endWeekDay)) {
      result.push(day.clone());
      day.add(1, 'day');
    }
    return result;
  };
  
  export const hoursObj = () => {
    //! fix it
    const hours = [
      { hour: '08:00' },
      { hour: '08:30' },
      { hour: '09:00' },
      { hour: '09:30' },
      { hour: '10:00' },
      { hour: '10:30' },
      { hour: '11:00' },
      { hour: '11:30' },
      { hour: '12:00' },
      { hour: '12:30' },
      { hour: '13:00' },
      { hour: '13:30' },
      { hour: '14:00' },
      { hour: '14:30' },
      { hour: '15:00' },
      { hour: '15:30' },
      { hour: '16:00' },
      { hour: '16:30' },
      { hour: '17:00' },
      { hour: '17:30' },
      { hour: '18:00' },
      { hour: '18:30' },
      { hour: '19:00' },
      { hour: '19:30' },
      { hour: '20:00' },
      { hour: '20:30' },
      { hour: '21:00' },
      { hour: '21:30' },
      { hour: '22:00' },
      { hour: '22:30' },
      { hour: '23:00' },
      { hour: '23:30' },
      { hour: '00:00' },
      { hour: '00:30' },
      { hour: '01:00' },
      { hour: '01:30' },
      { hour: '02:00' },
      { hour: '02:30' },
      { hour: '03:00' },
      { hour: '03:30' },
      { hour: '04:00' },
      { hour: '04:30' },
      { hour: '05:00' },
      { hour: '05:30' },
      { hour: '06:00' },
      { hour: '06:30' },
      { hour: '07:00' },
      { hour: '07:30' },
    ];
    const topResultArr = [0]
    let item = 0;
    for (let i = 1; i < hours.length; i++) {
      topResultArr.push((item += 7.2));
    }
  
    const hoursWithTop = hours.map((el, index) => {
      return {
        ...el,
        top: topResultArr[index],
      };
    });
  
    const bottomResultArr = [100];
    let canIGetAHoyaaa = 100;
    for (let i = 1; i < hours.length; i++) {
      bottomResultArr.push((canIGetAHoyaaa -= 7.2));
    }
  
    const finalHourArr = hoursWithTop.map((el, index) => {
      return {
        ...el,
        bottom: bottomResultArr[index],
      };
    });
    return finalHourArr;
  };

  export const filteringDates = (arrayWithObject) => {
    const isDescriptionExist = arrayWithObject.filter(obj => obj.description.content !== '') 
		const result = isDescriptionExist.reduce((accumulator, obj) => {
			const existingBlock = accumulator.find(
				(block) => block.date === obj.date
			);

			if (existingBlock) {
				existingBlock.blocks.push(obj);
			} else {
				accumulator.push({
					date: obj.date,
					blocks: [obj],
				});
			}

			return accumulator;
		}, []);

		return result;
	};
  