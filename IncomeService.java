package com.example.budgettracker.service;

import com.example.budgettracker.model.Income;
import com.example.budgettracker.repository.IncomeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncomeService {
    private final IncomeRepository incomeRepository;

    public IncomeService(IncomeRepository incomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    public List<Income> getAllIncomes() {
        return incomeRepository.findAll();
    }

    public Income saveIncome(Income income) {
        return incomeRepository.save(income);
    }
}
