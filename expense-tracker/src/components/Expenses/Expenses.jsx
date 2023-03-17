import "./Expenses.css";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter";
import { useState } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpenseChart } from "./ExpensesChart";

export function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2019");
	const addFilterYear = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})



	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onShowYearHandler={addFilterYear}
				/>
				<ExpenseChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}
