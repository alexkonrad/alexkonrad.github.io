---
layout: post
permalink: /notes/reinforcement-learning
title: Reinforcement Learning
excerpt: Notes mostly from Sutton & Barto
---

## Dynamic Programming

### Introduction

### Policy Evaluation

To evaluate a policy $\pi$, use Bellman expectation equation with an iterative update. We start off with an initial arbitrary value function, $v_1=0$. From there, we compute a one-step lookahead using the Bellman equation, and compute a new value function called $v_2$. In the limit, this will converge to $v_\pi$.

We first use the method of synchronous backups, which computes the new value function for each state  For each iteration $k+1$, for all states $s\in\mathcal{S}$, apply iterative update to compute the new value function.

\\\[
v_{k+1}(s) = \sum_{a\in\mathcal{A}} \pi(a|s) \left(\mathcal{R}_s^a + \gamma \sum_{s'\in\mathcal{S}} \mathcal{P}_{ss'}^a v_k(s') \right)
\\\]

contraction mapping theorem
Bellman expectation equation to do policy evaluation---Bellman optimality equation is used for control. Iterative policy

Given a policy $\pi$, evaluate the policy $v_{\pi}(s)$, then improve the policy by acting greedily with respect to $v_{\pi}$.

### Policy Iteration

### Value Iteration




## Model-Free Reinforcement Learning

Last time: Planning by DP
Solve a *known* MDP

Model-free prediction
Estimate the value function of an unknown MDP
**Next lecture**: control

### Monte-Carlo Learning

Monte Carlo methods learn directly from episodes of experience. Monte-Carlo is *model-free*---no knowledge of Markov Decision Process transitions / rewards. Monte Carlo learns from *complete* episodes: no bootstrapping. Monte Carlo uses the simplest possible idea: value is mean return. Caveat, can only apply Monte Carlo to episodic Markov Decision Processes.

#### Monte-Carlo Policy Evaluation

Goal: Learn $v_{\pi}$ from episodes of experience under policy $\pi$.

\[
S_1,A_1,R_2,\ldots,S_k\tilde\pi
\]

Recall that the return is the discounted reward:

\[
G_t=R_{t+1}+\gamma R_{t+2} + \ldots + \gamma^{T-1}R_T
\]

Recall that the value function is the expected return:

\[
v\pi(s) = \mathbb{E}_{\pi}[G_t|S_t=s]
\]

Monte-Carlo policy evaluation uses *empirical mean* instead of expected return.

#### First-visit Monte Carlo Policy Evaluation

To evaluate state $s$, the *first* time-step $t$ that state $s$ is visited in an episode, we increment a counter $N(s)\leftarrow N(s)+1$ and increment total return $S(s) \leftarrow S(s) + G_t$. Then value is estimated by mean return $V(s)=S(s)/N(s)$. By law of large numbers, $V(s) \rightarrow v_{\pi}(s)$ as $N(s) \rightarrow \infty$.

#### Blackjack

Policy: **stick** if sum of cards $\geq$ 20, otherwise **twist**.

#### Temporal-Difference Learning

TD methods learn directly from episodes of experience. Like Monte Carlo learning, TD is *model-free*, which is to say that no knowledge of the transition or reward dynamics of the underlying Markov Decision Process. Unlike Monte-Carlo learning, TD learns from *incomplete* episodes by bootstrapping. We say that TD updates a guess towards a guess.

#### Monte Carlo and Temporal Difference Learning

The goal is to learn $v_{\pi} online from experience under policy $\pi$. Incremental every-visit Monte-Carlo, update value $V(S_t)$ toward *actual* return $G_t$:
\[
V(S_t) \leftarrow V(S_t) + \alpha(G_t-V(S_t))
\]
Simplest temporal difference learning algorithm: TD(0):

* Update value $V(S_t)$ toward *estimated* return $R_{t+1}+\gammaV(S_{t+1})$.
\[
V(S_t) \leftarrrow V(S_t) + \alpha(R_{t+1} + \gammaV(S_{t+1}) - V(S_t)) 
\]
* $R_{t+1} + \gamma V(S_{t+1})$ is called the *TD target*
* $\delta_t = \gamma V(S_{t+1}) - V(S_t)$ is called the *TD error*

* TD can learn *before* knowing the final outcome
** TD can learn online after every step
** MC must wait until end of episode before return isknown
* TD can learn *without* the final outcome
** TD can learn from incomplete sequences
** MC can only learn from complete sequences
** TD works in continuing (non-terminating) environments
** MC only works for episodic (terminating) environments

##### Bias/Variance Trade-off

* Return $G_t = R_{t+1} + \gamma R_{t+2} + \ldots + \gamma^{T-1}R_T is *unbiased* estimate of $v_{\pi}(S_t)
* True TD target $R_{t+1} + \gamma v_{\pi}(S_{t+1}) is an *unbiased* estimate of $v_{\pi}(S_t)
* The target $R_{t+1} + \gamma V(S_{t+1})$ is a biased estimate of $v_{\pi}(S_t)$
* TD target is much lower variance than the return
** Return depends on *many* random actions, transitions, rewards
** TD target depends on *one* random action, transition, reward

* MC has high variance, zero bias
** Good convergence properties
** (even with function approximation)
** Not very sensitive to initial value
** Very simple to understand and use
* TD has low variance, some bias
** Usually more efficient than MC
** TD(0) converges to $v_{\pi}(s)
** (but not always with function approximation)
** more sensitive to initial value






























## Applications

* Thermal Soaring
