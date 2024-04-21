import { Document, Model } from "mongoose";

//сгенерируем нашу аналитику за последние 12 мес

interface MonthData {
  month: string;
  count: number;
}
// сюда добпавляется пользовательская модель
export async function generateLast12MonthsDate<T extends Document>(
  model: Model<T> ): Promise<{ last12Months: MonthData[] }>
 {
  const last12Months: MonthData[] = []; //данные за 12мес
    const currentDate = new Date(); //текущ дата
  //добавим один день
  currentDate.setDate(currentDate.getDate() + 1);

  for (let i = 11; i >= 0; i--) { // 11 так как с нуля начало
  // даты конца и начала 
    const endDate = new Date( currentDate.getFullYear(), currentDate.getMonth(),
                                currentDate.getDate() - i * 28 );
    const startDate = new Date( endDate.getFullYear(), endDate.getMonth(),
                                   endDate.getDate() - 28 );
//наш месяц по умолчанию
    const monthYear = endDate.toLocaleString("defult", {
         day: "numeric", month: "short", year: "numeric",  
      });
// создаю модель   --- посчитаем
    const count = await model.countDocuments({
      createdAt: {  //фильтр от и до = кол-ву запросов
        $gte: startDate,
        $lt: endDate,
      },

    });
//------ это точка за последние 12 месяцев - массив
    last12Months.push({ month: monthYear, count });
  }

  return { last12Months }; //последний 12мес
}
