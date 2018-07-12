require 'pry'

# def get_squares (arr)
# 	perfect_squares = []
# 	arr.each do |number|
# 		square_root = Math.sqrt(number)
# 		if square_root % 1 == 0
# 			perfect_squares.push(number.floor)
# 		end
# 	end
# 	return perfect_squares.uniq.sort
# end

# p get_squares([4, 1, 16, 1, 10, 35, 22])

#map? #select?

def get_squares (arr) 
	arr.select do |number|
		Math.sqrt(number) % 1 == 0
	end.uniq.sort
end

p get_squares([4, 1, 16, 1, 10, 35, 22])

#ruby will automatically return the last result, so no need to use return
# select has kept the ones that meet the boolean condition and returned them

#leah one line code
# def get_squares(ary)
#     ary.uniq.select { | num | Math.sqrt(num) % 1 == 0 }.sort
# end

# p get_squares([4, 1, 16, 1, 10, 35, 22])