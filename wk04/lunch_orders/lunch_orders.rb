require 'pry'

orders = {}

def get_order (orders)
	puts "Name for order: "
	user_name = gets.chomp
	puts "#{user_name} wants to order: "
	orders[user_name] = []
	user_order = gets.chomp
	orders[user_name] << user_order


	loop do
		puts "Add another item to order? (y/n)"
		if gets.chomp == "y"
			puts "Is this for #{user_name}? (y/n)"
			if gets.chomp == "y" 
				puts "What else #{user_name}?"
				user_order = gets.chomp
				orders[user_name] << user_order
				puts "#{user_order} added!"
			else 
				puts "Name for order: "
				user_name = gets.chomp
				puts "#{user_name} wants to order: "
				orders[user_name] = []
				user_order = gets.chomp
				orders[user_name] << user_order
			end
		else 
			break
		end
	end
end 

get_order(orders)
puts "All orders: #{orders}"