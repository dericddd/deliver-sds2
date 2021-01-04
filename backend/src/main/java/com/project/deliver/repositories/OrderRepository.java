package com.project.deliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.deliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
