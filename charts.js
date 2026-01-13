// Chart.js Visualizations for Lifestyle Analysis - Lazy Loading
window.chartsInitialized = false;
window.chartInstances = {};

window.initializeCharts = function() {
    if (window.chartsInitialized) return;

    console.log('Initializing charts...');

    // Common chart options
    const commonOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // GDP tier labels
    const tierLabels = ['Low Income\n(<$5K)', 'Lower-Middle\n($5K-$15K)', 'Upper-Middle\n($15K-$30K)', 'High Income\n(>$30K)'];

    // Color scheme for tiers (modernized)
    const tierColors = ['#FEF3C7', '#FCD34D', '#F59E0B', '#DC2626'];

    // 1. Health & Wellness Chart
    const healthCtx = document.getElementById('healthChart').getContext('2d');
    window.chartInstances.health = new Chart(healthCtx, {
        type: 'bar',
        data: {
            labels: tierLabels,
            datasets: [
                {
                    label: 'Life Expectancy (years)',
                    data: [65, 71, 75, 82],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Healthcare Coverage (%)',
                    data: [55, 70, 85, 96],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            ...commonOptions,
            plugins: {
                title: {
                    display: true,
                    text: 'Health Indicators by Income Level',
                    font: { size: 16 }
                },
                legend: {
                    position: 'top'
                }
            }
        }
    });

    // 2. Education & Technology Chart
    const educationCtx = document.getElementById('educationChart').getContext('2d');
    new Chart(educationCtx, {
        type: 'line',
        data: {
            labels: tierLabels,
            datasets: [
                {
                    label: 'Literacy Rate (%)',
                    data: [68, 82, 93, 99],
                    borderColor: 'rgba(155, 89, 182, 1)',
                    backgroundColor: 'rgba(155, 89, 182, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Internet Penetration (%)',
                    data: [30, 55, 75, 92],
                    borderColor: 'rgba(52, 152, 219, 1)',
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Smartphone Ownership (%)',
                    data: [35, 60, 78, 87],
                    borderColor: 'rgba(46, 204, 113, 1)',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            ...commonOptions,
            plugins: {
                title: {
                    display: true,
                    text: 'Education & Technology Access',
                    font: { size: 16 }
                }
            }
        }
    });

    // 3. Work & Employment Chart
    const workCtx = document.getElementById('workChart').getContext('2d');
    new Chart(workCtx, {
        type: 'bar',
        data: {
            labels: tierLabels,
            datasets: [
                {
                    label: 'Avg. Work Hours/Week',
                    data: [52, 48, 42, 38],
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Remote Work Availability (%)',
                    data: [3, 12, 28, 42],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Work Patterns Across Income Levels',
                    font: { size: 16 }
                },
                legend: {
                    position: 'top'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Hours/Week'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Remote Work %'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });

    // 4. Consumer Behavior Chart
    const consumerCtx = document.getElementById('consumerChart').getContext('2d');
    new Chart(consumerCtx, {
        type: 'doughnut',
        data: {
            labels: ['Necessities', 'Discretionary', 'Savings'],
            datasets: [
                {
                    label: 'Low Income',
                    data: [70, 20, 10],
                    backgroundColor: ['#e74c3c', '#3498db', '#2ecc71']
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Spending Patterns: Low Income Countries',
                    font: { size: 16 }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Add interactivity to switch between income tiers
    let currentTier = 0;
    const tierData = [
        { label: 'Low Income', data: [70, 20, 10] },
        { label: 'Lower-Middle Income', data: [55, 30, 15] },
        { label: 'Upper-Middle Income', data: [40, 42, 18] },
        { label: 'High Income', data: [35, 45, 20] }
    ];

    // 5. Housing & Transportation Chart
    const housingCtx = document.getElementById('housingChart').getContext('2d');
    new Chart(housingCtx, {
        type: 'radar',
        data: {
            labels: ['Home Ownership %', 'Living Space (sqm/person)', 'Car Ownership %', 'Urban Population %', 'Public Transport Access %'],
            datasets: [
                {
                    label: 'Low Income',
                    data: [60, 12, 8, 35, 30],
                    borderColor: 'rgba(231, 76, 60, 1)',
                    backgroundColor: 'rgba(231, 76, 60, 0.2)',
                    pointBackgroundColor: 'rgba(231, 76, 60, 1)'
                },
                {
                    label: 'High Income',
                    data: [68, 45, 75, 82, 85],
                    borderColor: 'rgba(46, 204, 113, 1)',
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    pointBackgroundColor: 'rgba(46, 204, 113, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Housing & Transportation Comparison',
                    font: { size: 16 }
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // 6. Leisure & Entertainment Chart
    const leisureCtx = document.getElementById('leisureChart').getContext('2d');
    new Chart(leisureCtx, {
        type: 'bar',
        data: {
            labels: tierLabels,
            datasets: [
                {
                    label: 'Annual Vacation Days',
                    data: [5, 10, 15, 22],
                    backgroundColor: 'rgba(155, 89, 182, 0.7)',
                    borderColor: 'rgba(155, 89, 182, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Entertainment Spending (% of income)',
                    data: [2, 4, 7, 11],
                    backgroundColor: 'rgba(52, 152, 219, 0.7)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Dining Out (times/month)',
                    data: [1, 3, 6, 12],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 2
                }
            ]
        },
        options: {
            ...commonOptions,
            plugins: {
                title: {
                    display: true,
                    text: 'Leisure Activities by Income Level',
                    font: { size: 16 }
                }
            }
        }
    });

    // 7. Social & Family Chart
    const socialCtx = document.getElementById('socialChart').getContext('2d');
    new Chart(socialCtx, {
        type: 'bar',
        data: {
            labels: tierLabels,
            datasets: [
                {
                    label: 'Average Household Size',
                    data: [5.5, 4.2, 3.5, 2.8],
                    backgroundColor: 'rgba(231, 76, 60, 0.7)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Volunteer Participation (%)',
                    data: [12, 18, 26, 38],
                    backgroundColor: 'rgba(46, 204, 113, 0.7)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 2,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Social & Family Patterns',
                    font: { size: 16 }
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Household Size'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Volunteer %'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });

    window.chartsInitialized = true;
    console.log('All charts initialized successfully');
};
