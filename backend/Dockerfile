FROM python:3.11

# Set the working directory in the container
WORKDIR /app 

# Install system dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# copy the application code to the container
COPY . .

# Run all migrations
CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"] 
