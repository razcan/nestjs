DELIMITER //

CREATE PROCEDURE GetEmployeeById(
	IN id integer
)
BEGIN
	SELECT * 
 	FROM apiv4.employee
	WHERE id = id;
END //

DELIMITER ;