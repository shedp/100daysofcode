def triangular_numbers(n):
    return [sum(range(1, i + 1)) for i in range(1, n + 1)]

def decode(message_file):
    file_lines = []
    
    with open(message_file, 'r') as file:
        for line in file:
            line = line.strip().split()
            converted_line = [int(line[0]), line[1]]
            file_lines.append(converted_line)

    sorted_lines = sorted(file_lines, key=lambda x: x[0])
    pyramid_numbers = triangular_numbers(len(sorted_lines))
    decoded_message = []

    for line in sorted_lines:
        if line[0] in pyramid_numbers:
            decoded_message.append(line[1])

    decoded_string =' '.join(decoded_message)    
    return decoded_string

print(decode('coding_qual_input.txt'))