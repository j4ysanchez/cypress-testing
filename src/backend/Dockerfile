FROM python:3.12.6

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .
# Upgrade pip and setuptools
RUN pip install --upgrade pip

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application code
COPY ./app /app

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]